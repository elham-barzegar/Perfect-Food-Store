import {ImageView} from "@/components";
import Link from "next/link";

export function Logo() {
    return (
        <Link href={'/'}>
            <ImageView width={242} height={66} src={"/assets/images/Logo.png"} alt={"logo"} className={"w-[117px] lg:w-[242px]"}/>
        </Link>
    );
}

