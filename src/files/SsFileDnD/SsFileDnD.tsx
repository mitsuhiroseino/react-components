import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import clsx from 'clsx';
import isEmpty from 'lodash/isEmpty';
import { ForwardedRef, forwardRef, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsFileDnDProps } from './types';

const Outline = styled('div')({
    color: 'rgba(0, 0, 0, 0.4)',
    borderStyle: 'dashed',
    borderWidth: 4,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: '16px 24px',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  defaultDragActive = <p>Drop the files here ...</p>,
  defaultDragInactive = <p>Drag 'n' drop some files here, or click to select files</p>;

const SsFileDnD = forwardRef((props: SsFileDnDProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
      className,
      Icon = CloudUploadIcon,
      onChange,
      dragActive = defaultDragActive,
      dragInactive = defaultDragInactive,
    } = props,
    [files, setFiles] = useState([] as File[]),
    onDrop = useCallback(
      (activeFiles) => {
        setFiles(activeFiles);
        if (onChange) {
          onChange(activeFiles);
        }
      },
      [onChange],
    ),
    { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

  return (
    <Outline ref={ref} {...getRootProps()} className={clsx(CLASS_NAME, className)}>
      <input {...getInputProps()} />
      {isEmpty(files) ? (
        <EmptyFiles Icon={Icon} isDragActive={isDragActive} dragActive={dragActive} dragInactive={dragInactive} />
      ) : (
        <Files files={files} />
      )}
    </Outline>
  );
});
SsFileDnD.displayName = DISPLAY_NAME;
export default SsFileDnD;

function EmptyFiles(props: any) {
  const { Icon, isDragActive, dragActive, dragInactive } = props;
  return (
    <Stack direction="column" alignItems="center" spacing={1}>
      {Icon ? <Icon style={{ fontSize: 64 }} /> : null}
      {isDragActive ? dragActive : dragInactive}
    </Stack>
  );
}

function Files(props: any) {
  const { files, progresses } = props;
  return (
    <Stack direction="column" width="100%" spacing={1}>
      {files.map((file: any) => (
        <div>{file.name}</div>
      ))}
    </Stack>
  );
}
