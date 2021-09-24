import { useSession } from "next-auth/client"
import {ChevronDownIcon, ShoppingCartIcon, UserGroupIcon} from "@heroicons/react/outline"
import {CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon} from "@heroicons/react/solid"
import SidebarRow from "./SidebarRow"

function Sidebar() {
    const [session] = useSession()
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={session.user.image} title={session.user.name}></SidebarRow>
            <SidebarRow Icon={UsersIcon} title="朋友"></SidebarRow>
            <SidebarRow Icon={UserGroupIcon} title="群组"></SidebarRow>
            <SidebarRow Icon={ShoppingCartIcon} title="市场"></SidebarRow>
            <SidebarRow Icon={DesktopComputerIcon} title="观察"></SidebarRow>
            <SidebarRow Icon={CalendarIcon} title="事件"></SidebarRow>
            <SidebarRow Icon={ClockIcon} title="记忆"></SidebarRow>
            <SidebarRow Icon={ChevronDownIcon} title="更多"></SidebarRow>
        </div>
    )
}

export default Sidebar
