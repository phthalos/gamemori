import Logo from "../logos/logo";

export default function Header() {
    return (
        <div className="py-4 fixed w-full flex items-center justify-center">
            <div className="w-2/3">
                <Logo />
            </div>
        </div>
    );
}
