import * as React from "react"
import { styled } from "styled-components"
import { useState, useEffect, useRef } from "react";

export const Navigator = () => {
    const [activeSection, setActiveSection] = useState(null);
    if (!activeSection) {
        setActiveSection('info')
    }

    const sections = useRef([]);
    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = null;

        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop-10;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop && pageYOffset 
            < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });

        setActiveSection(newActiveSection);
    };

    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
  }, []);


    return (
        <Wrapper>
            <Nav>
                <NavLink href="#about" className={activeSection === 'info' ? 'active' : ''} >&gt; about</NavLink>
                <NavLink href="#projects" className={activeSection === 'projects' ? 'active' : ''}>&gt; projects</NavLink>
                <NavLink href="#experience" className={activeSection === 'experience' ? 'active' : ''}>&gt; experience</NavLink>
            </Nav>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const Nav = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.2em;
`

const NavLink = styled.a`
    transition: all 0.1s ease;
    text-decoration:none;
    color:${({theme}) => theme.colors.subtext};
    font-size:1.25em;
    font-weight:500;
    //padding-left: 1.12em;
    padding-top:0.125em;
    padding-bottom:0.125em;

    &.active{
        color:${({theme}) => theme.colors.text};
        margin-left:0.5em;
    }

    &:hover {
        color:${({theme}) => theme.colors.text};
        margin-left:0.5em;
    }

    
`

