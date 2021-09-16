import { useSession } from "next-auth/client"
import {ChevronDownIcon, ShoppingCartIcon, UserGroupIcon} from "@heroicons/react/outline"
import {CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon} from "@heroicons/react/solid"

function Siderbar() {
    const [session] = useSession()
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SiderbarRow src={session.user.image} title={session.user.name}></SiderbarRow>
            <SiderbarRow Icon={UsersIcon} title="Friends"></SiderbarRow>
            <SiderbarRow Icon={UserGroupIcon} title="Groups"></SiderbarRow>
            <SiderbarRow Icon={ShoppingCartIcon} title="Marketplace"></SiderbarRow>
            <SiderbarRow Icon={DesktopComputerIcon} title="watch"></SiderbarRow>
            <SiderbarRow Icon={CalendarIcon} title="Events"></SiderbarRow>
            <SiderbarRow Icon={ClockIcon} title="Memories"></SiderbarRow>
            <SiderbarRow Icon={ChevronDownIcon} title="See More"></SiderbarRow>


        </div>
    )
}

export default Siderbar
