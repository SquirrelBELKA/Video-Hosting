import { borderLeft, fontWeight } from "@material-ui/system";

function OnLoadingUserData(Component) {
    return function LoadingPersonsData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />

        else return (
            <div className={{
                fontfontWeight: borderLeft,
                
            }}>Loading...
                
            </div>
        )
    }
}

export default OnLoadingUserData;