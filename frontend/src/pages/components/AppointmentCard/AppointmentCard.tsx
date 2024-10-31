import { cardStyle, IconStyle } from './styles'
import { AppointmentCardProps } from './types'
import VisibilityIcon from '@mui/icons-material/Visibility';

const AppointmentCard = ({ onClick, appointment } : AppointmentCardProps) => {
  return (
    <div style={cardStyle}>
      <VisibilityIcon onClick={() => onClick(appointment)} style={IconStyle} />
      <h3>{appointment.exam_name}</h3>
      <p>{appointment.time.time}</p>
    </div>
  );
};

export default AppointmentCard;