import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
} from "lucide-react";

function ResumeInfoCard({ data }) {
  return (
    <div className="resume-card">

      <h2 className="card-title">
        Resume Information
      </h2>

      <div className="info-item">
        <User className="info-icon" />
        <div>
          <span>Name</span>
         <p>{data.name || "Will be extracted from resume"}</p>
        </div>
      </div>

      <div className="info-item">
        <Mail className="info-icon" />
        <div>
          <span>Email</span>
          <p>{data.email || "Will be extracted from resume"}</p>
        </div>
      </div>

      <div className="info-item">
        <Phone className="info-icon" />
        <div>
          <span>Phone</span>
          <p>{data.phone || "Will be extracted from resume"}</p>
        </div>
      </div>

      <div className="info-item">
        <GraduationCap className="info-icon" />
        <div>
          <span>Education</span>
          <p>{data.education || "Will be extracted from resume"}</p>
        </div>
      </div>

      <div className="info-item">
        <Briefcase className="info-icon" />
        <div>
          <span>Experience</span>
          <p>{data.experience || "Will be extracted from resume"}</p>
        </div>
      </div>

    </div>
  );
}

export default ResumeInfoCard;