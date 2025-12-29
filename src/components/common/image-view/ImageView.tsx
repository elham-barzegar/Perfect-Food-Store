import Image from "next/image";

interface props {
    src?: string | null;
    alt: string;
    width: number;
    height: number;
    className?: string;
}
export function ImageView({src = '', alt, width, height, className = ''}: props) {

    const imageSrc = src ? ( src.startsWith('/uploads') ? 'https://nest.navaxcollege.com'+src : src) : "";


        return (
            <Image src={imageSrc} alt={alt} width={width} height={height} className={className}/>

        )
}
