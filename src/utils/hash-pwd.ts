import * as crypto from 'crypto';

export const hashPwd = (p: string): string => {
  const hmac = crypto.createHmac(
    'sha512',
    'r432r4wf#VQ5v #$GF 35g#GQ#%$G 34ghzdsryt6uiij8MKCA#$@W vae4v%$VWE%v VB$%WBS RB4w5v%$WEV 345q6TVQT#$ O%4 3246tV542',
  );
  hmac.update(p);
  return hmac.digest('hex');
};
