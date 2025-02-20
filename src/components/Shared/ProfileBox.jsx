import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";

export default function ProfileBox({ allowEdit = true }) {
  const { username } = useSelector((state) => state.user);
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
  });
  const [loading, setLoading] = useState(true);
  const [docId, setDocId] = useState(null);

  useEffect(() => {
    if (username) {
      fetchUserProfile(username);
    }
  }, [username]);

  const fetchUserProfile = async (username) => {
    try {
      setLoading(true);
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        setDocId(userDoc.id);
        setProfile((prevProfile) => ({
          ...prevProfile,
          ...userDoc.data(),
        }));
      } else {
        console.warn("No user document found.");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = async () => {
    if (!docId) {
      console.error("No user document ID found.");
      return;
    }
    try {
      const userRef = doc(db, "users", docId);
      await updateDoc(userRef, {
        address: profile.address,
        city: profile.city,
        postCode: profile.postCode,
        country: profile.country,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="profile-box">
      <h2>Profile Information</h2>
      <form>
        <div className="control-group">
          <label className="control-label">Username</label>
          <div className="controls">
            <input type="text" value={profile.username} disabled className="input-xlarge" />
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">Email</label>
          <div className="controls">
            <input type="email" value={profile.email} disabled className="input-xlarge" />
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">Address</label>
          <div className="controls">
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              className="input-xlarge"
              disabled={!allowEdit}
            />
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">City</label>
          <div className="controls">
            <input
              type="text"
              name="city"
              value={profile.city}
              onChange={handleInputChange}
              className="input-xlarge"
              disabled={!allowEdit}
            />
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">Post Code</label>
          <div className="controls">
            <input
              type="text"
              name="postCode"
              value={profile.postCode}
              onChange={handleInputChange}
              className="input-xlarge"
              disabled={!allowEdit}
            />
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">Country</label>
          <div className="controls">
            <input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleInputChange}
              className="input-xlarge"
              disabled={!allowEdit}
            />
          </div>
        </div>

        {allowEdit && (
          <div className="form-actions">
            <button type="button"  style={{marginRight:"5px"}} className="btn btn-inverse" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button type="button" className="btn">
              <Link to="/checkout">Checkout</Link>
              
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
