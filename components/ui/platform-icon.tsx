function isMainPlatform(name: string) {
    const lower = name.toLowerCase();

    return (
        lower.includes("pc") ||
        lower.includes("web") ||
        lower.includes("android") ||
        lower.includes("ios") ||
        lower.includes("macos") ||
        lower.includes("playstation") ||
        lower.includes("ps vita") ||
        lower.includes("psp") ||
        lower.includes("xbox") ||
        // Nintendo 계열 (선별 포함)
        lower.includes("nintendo switch") ||
        lower.includes("nintendo 3ds") ||
        lower.includes("nintendo ds") ||
        lower.includes("nintendo dsi")
    );
}

function getPlatformGroup(name: string): string | null {
    const lower = name.toLowerCase();

    if (lower.includes("pc")) return "pc";
    if (lower.includes("web")) return "web";
    if (lower.includes("android")) return "android";
    if (lower.includes("ios")) return "ios";
    if (lower.includes("macos")) return "macos";

    if (lower.includes("playstation") || lower.includes("ps vita") || lower.includes("psp")) return "playstation";

    if (lower.includes("xbox")) return "xbox";

    if (
        lower.includes("nintendo switch") ||
        lower.includes("nintendo 3ds") ||
        lower.includes("nintendo ds") ||
        lower.includes("nintendo dsi")
    )
        return "nintendo";

    return null;
}

export function PlatformIcon({ name, isGroupName = false }: { name: string; isGroupName?: boolean }) {
    if (!isGroupName && !isMainPlatform(name)) return null;
    const group = isGroupName ? name : getPlatformGroup(name);
    if (!group) return null;
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={`/icons/${group}.svg`} alt={group} className="h-4 object-contain block" />;
}

// 중복 제거 후 리스트 출력
interface RawPlatform {
    platform: {
        name: string;
    };
}

interface PlatformIconListProps {
    list: RawPlatform[];
}

export function PlatformIconList({ list }: PlatformIconListProps) {
    const groups = Array.from(
        new Set(list.map((p) => getPlatformGroup(p.platform?.name ?? "")).filter((g): g is string => g !== null))
    );

    return (
        <ul className="flex gap-2 mt-8">
            {groups.map((group) => (
                <li key={group}>
                    <PlatformIcon name={group} isGroupName={true} />
                </li>
            ))}
        </ul>
    );
}
