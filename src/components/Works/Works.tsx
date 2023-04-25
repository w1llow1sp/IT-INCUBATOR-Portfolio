import React from 'react';
import styles from './Works.module.css'
import {store} from "../../store/data";
import TrackVisibility from "react-on-screen";
import {Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";
import WorkCard from "./WorksCard/WorksCard";

export const Works = () => {
    let STORE = store.worksSection

    return (
        <section className={styles.works}>
            <div className={'container'}>
                <TrackVisibility>

                <h2 className={styles.header}>
                    Works
                </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an
                        unknown printer took a galley of type
                        and scrambled it to make a type specimen
                        book.
                    </p>
                <TabContainer
                id={'projects-tabs'}
                defaultActiveKey={'first'}>
                    <Nav
                        variant={'pills'}
                        id={'pills-tab'}
                    ><NavItem>
                        <NavLink eventKey={'first'}>
                            Tab 1
                        </NavLink>
                    </NavItem>
                        <NavItem>
                            <NavLink eventKey={'second'}>
                                Tab 2
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey={'third'}>
                                Tab 3
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent
                    id={'slideInUp'}>
                        <TabPane eventKey={'first'}>
                            <Row>
                                {
                                    STORE.map(work => {
                                        return (
                                            <WorkCard
                                                key={work.id}
                                                id={work.id}
                                                name={work.name}
                                                link={work.link}
                                                decription={work.decription}
                                                image={work.decription}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                        <TabPane eventKey={'second'}>
                            <p>
                               Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Earum nam
                                nesciunt nihil reprehenderit voluptate! A, adipisci
                                at consequatur est illum inventore labore libero
                                nisi numquam optio placeat porro, quas veritatis?
                            </p>
                        </TabPane>
                        <TabPane eventKey={'third'}>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Earum nam
                                nesciunt nihil reprehenderit voluptate! A, adipisci
                                at consequatur est illum inventore labore libero
                                nisi numquam optio placeat porro, quas veritatis?                            </p>
                        </TabPane>


                    </TabContent>

                </TabContainer>
                </TrackVisibility>
            </div>
        </section>
    );
};


