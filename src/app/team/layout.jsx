
// for SEO
export async function generateMetadata(){
    return{
        tilte:"Team Members"
    }
}


const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;