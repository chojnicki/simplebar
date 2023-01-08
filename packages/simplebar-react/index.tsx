import React, { useEffect, useRef } from 'react';
import type { ElementType } from 'react';
import SimpleBarCore from 'simplebar-core';
import type { Options } from 'simplebar-core';

export type PolymorphicRef<
  C extends React.ElementType
> = React.ComponentPropsWithRef<C>['ref'];

interface Props<T extends ElementType> extends Options {
  children?: React.ReactNode;
  className?: string;
  scrollableNodeProps?: {
    ref?: any;
    className?: string;
  };
  tag?: T;
}

const SimpleBar = React.forwardRef(
  <T extends ElementType = 'div'>(
    { children, scrollableNodeProps = {}, tag, ...otherProps }: Props<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const RootTag = tag || 'div';
    const elRef = useRef();
    const scrollableNodeRef = useRef<HTMLElement>();
    const contentNodeRef = useRef<HTMLElement>();
    let options: any = {};
    let rest: any = {};

    Object.keys(otherProps).forEach((key) => {
      if (
        Object.prototype.hasOwnProperty.call(SimpleBarCore.defaultOptions, key)
      ) {
        options[key] = otherProps[key as keyof Options];
      } else {
        rest[key] = otherProps[key as keyof Options];
      }
    });

    useEffect(() => {
      let instance: SimpleBarCore | null;
      scrollableNodeRef.current = scrollableNodeProps.ref
        ? scrollableNodeProps.ref.current
        : scrollableNodeRef.current;

      if (elRef.current) {
        instance = new SimpleBarCore(elRef.current, {
          ...options,
          ...(scrollableNodeRef.current && {
            scrollableNode: scrollableNodeRef.current,
          }),
          ...(contentNodeRef.current && {
            contentNode: contentNodeRef.current,
          }),
        });

        if (typeof ref === 'function') {
          ref(instance);
        } else if (ref) {
          ref.current = instance;
        }
      }

      return () => {
        instance?.unMount();
        instance = null;
        if (typeof ref === 'function') {
          ref(null);
        }
      };
    }, []);

    return (
      <RootTag ref={elRef} data-simplebar {...rest}>
        <div className="simplebar-wrapper">
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer" />
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset">
              {typeof children === 'function' ? (
                children({
                  scrollableNodeRef,
                  scrollableNodeProps: {
                    className: 'simplebar-content-wrapper',
                    ref: scrollableNodeRef,
                  },
                  contentNodeRef,
                  contentNodeProps: {
                    className: 'simplebar-content',
                    ref: contentNodeRef,
                  },
                })
              ) : (
                <div
                  {...scrollableNodeProps}
                  className={`simplebar-content-wrapper${
                    scrollableNodeProps.className
                      ? ` ${scrollableNodeProps.className}`
                      : ''
                  }`}
                >
                  <div className="simplebar-content">{children}</div>
                </div>
              )}
            </div>
          </div>
          <div className="simplebar-placeholder" />
        </div>
        <div className="simplebar-track simplebar-horizontal">
          <div className="simplebar-scrollbar" />
        </div>
        <div className="simplebar-track simplebar-vertical">
          <div className="simplebar-scrollbar" />
        </div>
      </RootTag>
    );
  }
);

SimpleBar.displayName = 'SimpleBar';

export default SimpleBar;
