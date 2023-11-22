// for SEO
export async function generateMetadata(){
    return{
        title:"All Projects"
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