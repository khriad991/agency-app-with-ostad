// for SEO
export async function generateMetadata(){
    return{
        title:"My Testimonials"
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