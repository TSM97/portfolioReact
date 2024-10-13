const Arrow = ({
  className,
  ...props
}: {
  className?: string; // Optional className prop
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    viewBox="0 -1.5 110 110"
    className={className}
    {...props}
  >
    <path
      fill="#ffff"
      d="M51.454 61.181A54944.417 54944.417 0 0 1 12.951 99.03c-2.565 2.509-5.304 4.85-8.078 7.128a2.955 2.955 0 0 1-3.32.262c-.858-.442-1.058-2.085-.329-3.085.704-.966 1.332-2.001 2.122-2.892 5.038-5.686 9.938-11.508 15.209-16.971 10.829-11.223 21.807-22.304 32.823-33.342 10.45-10.475 21.045-20.806 31.533-31.247 1.683-1.676 3.15-3.568 4.68-5.396a.967.967 0 0 0 .041-.926c-.229-.29-.738-.65-1.008-.571-4.963 1.467-9.976 2.804-14.844 4.55-11.32 4.064-22.986 6.826-34.66 9.575-1.919.451-3.906.947-5.842-.03-.352-.178-.94-.497-.919-.696a4.63 4.63 0 0 1 .628-2.17 4.285 4.285 0 0 1 1.89-1.37c2.618-.985 5.258-1.923 7.927-2.757C59.873 13.103 78.96 7.176 98.02 1.162c7.19-2.269 11.822-2.131 11.552 8.953-.077 3.194-.174 6.406-.565 9.571a4786.659 4786.659 0 0 1-5.645 44.024 38.187 38.187 0 0 1-1.423 5.782c-.375 1.264-1.458 1.82-2.699 1.994-1.365.192-3.555-1.032-4.037-2.05-1.07-2.263-1.104-4.673-.935-7.056.651-9.174 1.385-18.342 2.124-27.508.482-5.973 1.038-11.936 1.51-17.908.022-.295-.394-.725-.709-.913a1.028 1.028 0 0 0-.952.066c-1.794 1.575-3.622 3.12-5.298 4.813a21202.686 21202.686 0 0 0-39.61 40.136l.12.115Z"
    />
  </svg>
);
export default Arrow;
