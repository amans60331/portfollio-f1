import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const SocialLinks = ({ variant = 'default', size = 20 }) => {
    const links = [
        { icon: Github, href: resumeData.contact.github, label: 'GitHub' },
        { icon: Linkedin, href: resumeData.contact.linkedin, label: 'LinkedIn' },
        { icon: Code2, href: resumeData.contact.leetcode, label: 'LeetCode' },
        { icon: Mail, href: `mailto:${resumeData.contact.email}`, label: 'Gmail' },
    ];

    return (
        <div className={`social-links-container ${variant}`}>
            {links.map(({ icon: Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    title={label}
                    aria-label={label}
                >
                    <Icon size={size} />
                </a>
            ))}

            <style jsx>{`
                .social-links-container {
                    display: flex;
                    gap: 15px;
                }
                
                .social-icon-link {
                    color: var(--text-secondary);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 8px;
                    text-decoration: none;
                }

                /* Variant Styles */
                .default .social-icon-link {
                    width: 40px;
                    height: 40px;
                }

                .hero-variant .social-icon-link {
                    width: 55px;
                    height: 55px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                }

                .social-icon-link:hover {
                    color: #fff;
                    background: var(--accent-racing);
                    transform: translateY(-5px) rotate(5deg);
                    box-shadow: 0 10px 20px rgba(239, 68, 68, 0.3);
                }

                .hero-variant .social-icon-link:hover {
                    color: #000;
                    transform: translateY(-8px) scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default SocialLinks;
