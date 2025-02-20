import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import PageBanner from "../Shared/PageBanner";
import { db } from "../../../firebase";

export default function ProfilePage() {
  const user = useSelector((state) => state.user); // 🔥 Взимаме текущия user от Redux
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
  });

  useEffect(() => {
    if (user?.isLoggedIn) {
      fetchUserProfile(user.uid); // 🔥 Зареждаме потребителските данни
    }
  }, [user]);

  // 🔥 Функция за взимане на потребителските данни от Firestore
  const fetchUserProfile = async (uid) => {
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setProfile((prevProfile) => ({
          ...prevProfile,
          ...userSnap.data(),
        }));
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  // 🔥 Обновяване на данните в state при въвеждане
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // 🔥 Функция за запазване на данните в Firestore
  const handleSaveChanges = async () => {
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        address: profile.address,
        city: profile.city,
        postCode: profile.postCode,
        country: profile.country,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Try again.");
    }
  };

  return (
    <div id="wrapper" className="container">
      <PageBanner pageName="My Profile" />
      <section className="main-content">
        <div className="row">
          <div className="span8 offset2">
            <h2>Profile Information</h2>
            <form>
              {/* Username */}
              <div className="control-group">
                <label className="control-label">Username</label>
                <div className="controls">
                  <input
                    type="text"
                    name="username"
                    value={profile.username}
                    disabled // 🔒 Не позволява редакция
                    className="input-xlarge"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="control-group">
                <label className="control-label">Email</label>
                <div className="controls">
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    disabled // 🔒 Не позволява редакция
                    className="input-xlarge"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="control-group">
                <label className="control-label">Address</label>
                <div className="controls">
                  <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    className="input-xlarge"
                    placeholder="Enter your address"
                  />
                </div>
              </div>

              {/* City */}
              <div className="control-group">
                <label className="control-label">City</label>
                <div className="controls">
                  <input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    className="input-xlarge"
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              {/* Post Code */}
              <div className="control-group">
                <label className="control-label">Post Code</label>
                <div className="controls">
                  <input
                    type="text"
                    name="postCode"
                    value={profile.postCode}
                    onChange={handleChange}
                    className="input-xlarge"
                    placeholder="Enter your post code"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="control-group">
                <label className="control-label">Country</label>
                <div className="controls">
                  <input
                    type="text"
                    name="country"
                    value={profile.country}
                    onChange={handleChange}
                    className="input-xlarge"
                    placeholder="Enter your country"
                  />
                </div>
              </div>

              {/* Save Changes Button */}
              <div className="form-actions">
                <button type="button" className="btn btn-inverse" onClick={handleSaveChanges}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
