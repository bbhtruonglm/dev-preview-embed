import Setting from "../../components/setting/Setting";
import { t } from "i18next";

export default function Home() {
  return (
    <div className="flex flex-grow min-h-0 w-full">
      <div className="flex flex-col gap-y-2 h-full w-full p-4">
        <h1 className="text-3xl font-bold">{t("setup_embed")}</h1>
        <Setting />
      </div>
    </div>
  );
}
