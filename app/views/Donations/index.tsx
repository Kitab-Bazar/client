import React from 'react';
import { _cs } from '@togglecorp/fujs';
import {
    Container,
    Heading,
    ButtonLikeLink,
} from '@the-deep/deep-ui';
import { IoOpenOutline } from 'react-icons/io5';

import { donations } from '#base/configs/lang';
import DonateMoney from '#resources/img/money.png';
import DonateBooks from '#resources/img/donate-books.png';
import DonateWebsite from '#resources/img/donate-website.png';
import useTranslation from '#base/hooks/useTranslation';

import styles from './styles.css';

interface Props {
    className?: string;
}

function Donations(props: Props) {
    const { className } = props;
    const strings = useTranslation(donations);

    return (
        <div className={_cs(styles.about, className)}>
            <div className={styles.pageContent}>
                <Container
                    className={styles.donationsText}
                    heading={strings.donationsHeading}
                >
                    <p>
                        {strings.donationsDescription1}
                    </p>
                    <p>
                        {strings.donationsDescription2}
                    </p>
                    <p>
                        {strings.donationsDescription3}
                    </p>
                </Container>
                <div className={styles.donateCards}>
                    <div className={styles.donateItem}>
                        <img
                            className={styles.icon}
                            src={DonateMoney}
                            alt="logo"
                        />
                        <Heading
                            size="extraSmall"
                        >
                            {strings.donateMoneyHeading}
                        </Heading>
                        <div className={styles.description}>
                            {strings.donateMoneyDescription}
                        </div>
                        <div className={styles.endWrapper}>
                            <ButtonLikeLink
                                to="https://forms.gle/iAPt8skLHCcCLY6w7"
                                actions={<IoOpenOutline />}
                                className={styles.button}
                                variant="tertiary"
                            >
                                {strings.linkToTheFormButtonLabel}
                            </ButtonLikeLink>
                        </div>
                    </div>
                    <div className={styles.donateItem}>
                        <img
                            className={styles.icon}
                            src={DonateBooks}
                            alt="logo"
                        />
                        <Heading
                            size="extraSmall"
                        >
                            {strings.donateSecondHandBooksHeading}
                        </Heading>
                        <div className={styles.description}>
                            {strings.donateSecondHandBooksDescription}
                        </div>
                        <div className={styles.endWrapper}>
                            <ButtonLikeLink
                                to="https://forms.gle/2eLYuiDxRnMemgc99"
                                actions={<IoOpenOutline />}
                                className={styles.button}
                                variant="tertiary"
                            >
                                {strings.linkToTheFormButtonLabel}
                            </ButtonLikeLink>
                        </div>
                    </div>
                    <div className={styles.donateItem}>
                        <img
                            className={styles.icon}
                            src={DonateWebsite}
                            alt="logo"
                        />
                        <Heading
                            size="extraSmall"
                        >
                            {strings.donateBooksFromWebsiteHeading}
                        </Heading>
                        <div className={styles.description}>
                            {strings.donateBooksFromWebsiteDescription}
                        </div>
                        <div className={styles.endWrapper}>
                            <div className={styles.description}>
                                {strings.contactUsAt}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donations;
