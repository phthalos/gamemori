export type LicenseType = {
    license_name: String; // 라이선스명
    version: String; // 라이선스 버전
};

const license: LicenseType[] = [
    {
        license_name: "@hookform/resolvers",
        version: "^5.0.1",
    },
    {
        license_name: "@radix-ui/react-checkbox",
        version: "^1.3.1",
    },
    {
        license_name: "@radix-ui/react-dialog",
        version: "^1.1.13",
    },
    {
        license_name: "@radix-ui/react-label",
        version: "^2.1.6",
    },
    {
        license_name: "@radix-ui/react-progress",
        version: "^1.1.6",
    },
    {
        license_name: "@radix-ui/react-radio-group",
        version: "^1.3.6",
    },
    {
        license_name: "@radix-ui/react-slider",
        version: "^1.3.4",
    },
    {
        license_name: "@radix-ui/react-slot",
        version: "^1.2.2",
    },
    {
        license_name: "@radix-ui/react-tabs",
        version: "^5.0.1",
    },
];

export { license };