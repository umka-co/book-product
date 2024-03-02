import { FunctionComponent } from 'react';
import {  OWNER } from '@/config';
import { ObjectPropByName } from '@/utils';
import { IconName } from '../Icon';
import Button from '../Button';
import Stack, { StackProps } from '../Stack/Stack';

export const SOCIAL_MEDIA: ObjectPropByName = {
  facebook: {
    href: 'https://www.facebook.com/karpolan',
    title: `Follow ${OWNER} on Facebook`,
  },
  twitter: {
    href: 'https://twitter.com/karpolan',
    title: `Follow ${OWNER} on Twitter`,
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/karpolan/',
    title: `Follow ${OWNER} on LinkedIn`,
  },
  instagram: {
    href: 'https://www.instagram.com/karpolan',
    title: `Follow ${OWNER} on Instagram`,
  },
  youtube: {
    href: 'https://www.youtube.com/@karpolan',
    title: `Follow ${OWNER} on YouTube`,
  },
};

interface Props extends StackProps {
  variant?: 'full' | 'footer'; 
}

/**
 * Renders list of social media links as icons
 * @component SocialMedia
 */
const SocialMedia: FunctionComponent<Props> = ({ variant = 'full', ...restOfProps }) => {
  const iconsToRender = variant === 'footer' ? ['facebook', 'twitter', 'linkedin'] : Object.keys(SOCIAL_MEDIA);
  return (
    <Stack direction="row" justifyContent="center" {...restOfProps}>
      {iconsToRender.map((key) => (
        <Button
          key={key}
          icon={key as IconName}
          href={SOCIAL_MEDIA[key].href}
          title={SOCIAL_MEDIA[key].title}
          variant="icon"
        />
      ))}
    </Stack>
  );
};

export default SocialMedia;
