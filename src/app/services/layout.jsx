// for SEO
export async function generateMetadata(){
    return {
        title:"All Services"
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