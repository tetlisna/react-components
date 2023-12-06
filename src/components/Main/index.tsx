import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { RootState } from '../../store/store';
import { resetFormData } from '../../store/reducers/formSliceReducer';

export default function Main() {
  const formData = useAppSelector((state: RootState) => state.form.formData);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.main}>
      <nav>
        <ul>
          <li>
            <Link to="/uncontrolled-form">Uncontrolled Form</Link>
          </li>
          <li>
            <Link to="/react-hook-form">React Hook Form</Link>
          </li>
        </ul>
        <div>
          <h3>Result</h3>
          <div>
            {formData.length >= 11 ? (
              <>{dispatch(resetFormData())}</>
            ) : (
              formData.map((data, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <p>First Name: {data.firstName}</p>
                  <p>Last Name: {data.lastName}</p>
                  <p>Age: {data.age}</p>
                  <p>Email: {data.email}</p>
                  {/* <p>Password: {data.password}</p> */}
                  <p>Gender: {data.gender}</p>
                  <p>Country: {data.autocomplete}</p>
                  <img
                    src={data.image}
                    alt={`Image ${data.lastName}`}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                    }}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
