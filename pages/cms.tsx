import NotFoundContent from "@/components/NotFoundContent";
import { useEffect } from "react";

const CMSRedirect = () => {
    useEffect(() => {
        window.location.href = "https://ancdavao.sanity.studio/";
    }, []);
    return <NotFoundContent />;
};

export default CMSRedirect;