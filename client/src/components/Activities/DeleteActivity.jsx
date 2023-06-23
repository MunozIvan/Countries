import "./DeleteActivity.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import axios from "axios";

function DeleteActivity(props) {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  const handleActivityChange = (event) => {
    event.preventDefault();
    //console.log(event.target.value);
  };

  const handleDeleteSubmit = async (event) => {
    event.preventDefault();
    const selectedActivity = event.target.delete.value;
    console.log(selectedActivity);

    if (selectedActivity === "Default") {
      return window.alert("Please select an activity to delete");
    }

    try {
      await axios.delete(`http://localhost:3001/activities/`, {
        data: { name: selectedActivity },
      });

      dispatch(actions.getActivities());
      window.alert("Activity deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="DeleteActivity">
        <h3 className="DeleteActivity-title">Want to delete an activity?</h3>
      <form className="deleteForm" onSubmit={handleDeleteSubmit}>
        <label htmlFor="delete">Select:</label>
        <select id="delete" onChange={handleActivityChange}>
          <option value="Default">Select an activity</option>
          {activities.map((activity) => (
            <option value={activity.name} key={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
        <button type="submit" className="delete-activity">
          Delete
        </button>
      </form>
    </div>
  );
}

export default DeleteActivity;
