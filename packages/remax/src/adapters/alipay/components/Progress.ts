import createHostComponent from '../../../createHostComponent';

export interface ProgressProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  percent?: number;
  showInfo?: boolean;
  strokeWidth?: string;
  activeColor?: string;
  backgroundColor?: string;
  active?: boolean;
}
const Progress = createHostComponent<ProgressProps>('progress');

export default Progress;
