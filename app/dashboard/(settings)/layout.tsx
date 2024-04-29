import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const tabs = [
  { title: "Edit profile", value: "edit-profile" },
  { title: "Professional account", value: "professional-account" },
  { title: "Notifications", value: "notifications" },
  { title: "Privacy and security", value: "privacy-and-security" },
  { title: "Login activity", value: "login-activity" },
  { title: "Emails from Instagram", value: "emails-from-instagram" },
];

function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Tabs
        defaultValue="edit-profile"
        className="py-16 p-8 border-r"
        orientation="vertical"
      >
        <h4 className="mb-4 ml-1 font-extrabold text-white text-xl">
          Settings
        </h4>
        <TabsList className="flex flex-col justify-start items-start bg-transparent h-full">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "data-[state=active]:bg-zinc-100 dark:data-[state=active]:bg-neutral-800 dark:hover:bg-neutral-900 w-full justify-start !px-3"
              )}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex-1 bg-white dark:bg-neutral-950 py-16 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default SettingsLayout;
