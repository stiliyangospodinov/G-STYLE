import PageBanner from "../Shared/PageBanner";
import ProfileBox from "../Shared/ProfileBox";

export default function ProfilePage() {
  return (
    <div id="wrapper" className="container">
      <PageBanner pageName="My Profile" />
      <section className="main-content">
        <div className="row">
          <div className="span8 offset2">
            <ProfileBox allowEdit={true} />
          </div>
        </div>
      </section>
    </div>
  );
}
