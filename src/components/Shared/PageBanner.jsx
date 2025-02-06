export default function PageBanner ({pageName}) {
    return (
        <section className="header_text sub">
        <img
            className="pageBanner"
            src="themes/images/pageBanner.png"
            alt=""
        />
        <h4>
            <span>{pageName}</span>
        </h4>
    </section>
    )
}