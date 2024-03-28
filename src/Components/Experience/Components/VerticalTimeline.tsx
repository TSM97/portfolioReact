import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTheme } from 'next-themes';
import { experienceData, experienceDataType } from '../data/experienceData';

export default function VerticalTimelineComp() {
  const { theme } = useTheme();

  return (
    <>
      <VerticalTimeline>
        {experienceData &&
          experienceData.map((el: experienceDataType) => {
            return (
              <VerticalTimelineElement
                className='vertical-timeline-element--work dark:text-black text-white'
                contentStyle={{
                  background: theme === 'light' ? '#000' : '#fff',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                dateClassName={
                  theme === 'light' ? 'text-[#000]' : 'text-[#fff]'
                }
                contentArrowStyle={{
                  borderRight: `7px solid  ${
                    theme === 'light' ? '#000' : '#fff'
                  }`,
                }}
                date={el.date}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={el.icon}
              >
                <h3 className='vertical-timeline-element-title'>
                  {el.jobTitle}
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  {el.address}
                </h4>
                <p>{el.text}</p>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </>
  );
}
