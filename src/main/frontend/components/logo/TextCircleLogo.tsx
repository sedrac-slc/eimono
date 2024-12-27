import classNames from 'classnames';

interface TextCircleLogoProps{
    text: string;
    contrast?: boolean;
}

export default function TextCircleLogo(props: TextCircleLogoProps){
    const first = props.text.substring(0, 2);
    const second = props.text.substring(2);
    return (
        <div className="flex justify-center items-center gap-0 text-4xl -pt-4 font-mono">
            <div className={classNames({
                    "w-14 h-14 rounded-full flex items-center justify-center": true,
                    "bg-white text-blue-500": props.contrast,
                    "text-white bg-blue-500": !props.contrast
              })}>{first}</div>
            <div className={classNames({"text-white": props.contrast})}>{second}</div>
        </div>
    );
}