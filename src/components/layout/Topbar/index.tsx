import Container from "../Container/page";
import Logo from "@/components/brand/logo";
import NavMenuTopbar from "./navbar";
import ActionsTopbar from "./actions";

export default function Topbar() {
  return (
    <div className="w-full py-3 bg-surface-primary-500 text-on-light-50">
      <Container className="max-w-[96rem]">
        <div className="flex items-center justify-between">
          <Logo className="order-2 lg:order-1" />
          <NavMenuTopbar className="order-1 lg:order-2" />
          <ActionsTopbar className="lg:order-3 order-3" />
        </div>
      </Container>
    </div>
  );
}
