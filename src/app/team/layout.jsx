
// for SEO
export async function generateMetadata(){
    return{
        tilte:"Team Members"
    }
}


const Layout = ({children}) => {
    return (
        <div>
            <h1>this is child layout </h1>
            {children}
        </div>
    );
};

export default Layout;