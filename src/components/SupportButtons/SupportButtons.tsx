import { FunctionComponent } from 'react';
import Button from '../Button';
import Stack from '../Stack';
import { StackProps } from '../Stack/Stack';

interface Props extends StackProps{}

const SupportButtons: FunctionComponent<Props> = ({direction, margin}) => {
  return (
    <Stack direction={direction} margin={margin}>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="BA8Z7FMAFWH4Y" />
        {/* <input
      type="image"
      src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
      // border="0"
      name="submit"
      alt="Помочь автору не умереть с голоду. Спасибо :)"
    /> */}
        {/* <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" /> */}
        <Button type="submit">Donate on PayPal</Button>
      </form>
      <Button href="https://www.patreon.com/join/karpolan?redirect_uri=https%3A%2F%2Fbook-product-ru.karpolan.com%2F&utm_medium=widget">
        Become a Patreon member
      </Button>
    </Stack>
  );
};

export default SupportButtons;
