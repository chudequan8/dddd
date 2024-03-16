import React, {FC, HTMLAttributes, ReactNode} from "react";
import useAsideStatus from "@/hooks/useAsideStatus";
import classNames from "classnames";
import themeConfig from "@/config/theme.config";
import useMessageStatus from "@/hooks/useMessageStatus";

interface IMessagesProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
}

const Messages: FC<IMessagesProps> = (props) => {
    const { children, className, ...rest } = props;

    const { asideStatus } = useAsideStatus();
    const { messageStatus } = useMessageStatus();
    return (
        <aside
            data-component-name='Messages'
            className={classNames(
                'peer',
                'fixed bottom-0 top-0 z-30 md:z-20 right-0',
                'flex flex-col',
                'py-6',
                'border-zinc-300/25 bg-white',
                'ltr:border-r rtl:border-l',
                'dark:border-zinc-800/50 dark:bg-zinc-900 dark:text-white',
                themeConfig.transition,
                className,
                // Mobile Design
                'max-md:w-[22.5rem] max-md:shadow-2xl ltr:max-md:-left-[22.5rem] rtl:max-md:-right-[22.5rem]',
                {
                    'md:w-[22.5rem] px-4': messageStatus,
                    'md:w-[0] px-0': !messageStatus,
                },
            )}
            {...rest}>
            {children}
        </aside>
    );
};

export default Messages;