import clsx from 'clsx';

const TextField = ({ error, className, label, name, required, ...props }) => {
  return (
    <div className="fv-row mb-7 fv-plugins-icon-container">
      {label && (
        <label className={clsx('fs-6 fw-semibold mb-2', required && 'required')}>{label}</label>
      )}
      <input className="form-control form-control-solid" {...props} />
      {error && (
        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextField;