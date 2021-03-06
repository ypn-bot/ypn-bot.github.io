import {
    FaTwitter,
    FaGithub,
    FaYoutube,
    FaSteam,
    FaFacebook,
    FaTwitch
} from 'react-icons/fa';
import MemberTeam from './MemberTeam';
const TeamMembers = [
    {
        username: 'Socram09',
        avatarURL: 'https://i.imgur.com/2srsI0T.png',
        role: 'Owner',
        socialMediaList: [
            {
                iconComponent: FaGithub,
                urlRedirect: 'https://github.com/socram03'
            },
            {
                iconComponent: FaTwitter,
                urlRedirect: 'https://twitter.com/Promedio_Person'
            },
            {
                iconComponent: FaFacebook,
                urlRedirect: 'https://facebook.com/2152646208345494'
            }
        ]
    },
    {
        username: 'Santi_24',
        avatarURL: 'https://i.imgur.com/8BM9PaS.png',
        role: 'Co-Owner',
        socialMediaList: [
            {
                iconComponent: FaYoutube,
                urlRedirect:
                    'https://youtube.com/channel/UCFqnn2G2p5cuxBsfOOgpVNg'
            },
            {
                iconComponent: FaGithub,
                urlRedirect: 'https://github.com/Santi24Yt'
            },
            {
                iconComponent: FaTwitch,
                urlRedirect: 'https://twitch.tv/santi_24_yt'
            }
        ]
    },
    {
        username: 'Lil MARCROCK22',
        avatarURL: 'https://i.imgur.com/pT4lf5u.png',
        role: 'Developer',
        socialMediaList: [
            {
                iconComponent: FaGithub,
                urlRedirect: 'https://github.com/MARCROCK22'
            }
        ]
    },
    {
        username: 'Kirzu~',
        avatarURL: 'https://i.imgur.com/nlf1ALd.png',
        role: 'Developer',
        socialMediaList: [
            {
                iconComponent: FaTwitter,
                urlRedirect: 'https://twitter.com/nKirzu'
            },
            {
                iconComponent: FaGithub,
                urlRedirect: 'https://github.com/NotKirzu'
            },
            {
                iconComponent: FaSteam,
                urlRedirect: 'https://steamcommunity.com/id/imkirzu/'
            }
        ]
    },
    {
        username: 'zPablo',
        avatarURL: 'https://i.imgur.com/XfWdyfN.png',
        role: 'Designer',
        socialMediaList: [
            {
                iconComponent: FaYoutube,
                urlRedirect:
                    'https://youtube.com/channel/UC4wrBYPvkmnyWTwTa5rbH2w'
            },
            {
                iconComponent: FaTwitch,
                urlRedirect: 'https://twitch.tv/itzpabloo_x'
            },
            {
                iconComponent: FaTwitter,
                urlRedirect: 'https://twitter.com/zPablo_z'
            }
        ]
    },

    {
        username: 'jairosalinas220',
        avatarURL: 'https://i.imgur.com/nc4GCyi.png',
        role: 'Frontend Developer',
        socialMediaList: [
            {
                iconComponent: FaTwitter,
                urlRedirect: 'https://twitter.com/jairosalinas220'
            },
            {
                iconComponent: FaGithub,
                urlRedirect: 'https://github.com/jairosalinas220'
            },
            {
                iconComponent: FaTwitch,
                urlRedirect: 'https://twitch.tv/jairosalinas220'
            }
        ]
    },
    {
        username: 'Deivid',
        avatarURL: 'https://imgur.com/cckaAHt.png',
        role: 'Pet Developer',
        socialMediaList: [
            {
                iconComponent: FaTwitter,
                urlRedirect: 'https://twitter.com/Drylozu'
            },
            {
                iconComponent: FaGithub,
                urlRedirect: 'https://github.com/Drylozu'
            },
            {
                iconComponent: FaTwitch,
                urlRedirect: 'https://twitch.tv/drylozu'
            }
        ]
    }
];
const TeamSection = () => {
    return (
        <div className="flex flex-wrap items-start justify-around py-10 bg-gray-500">
            {TeamMembers.map((TeamMembersProps, index) => (
                <MemberTeam
                    key={index}
                    positionFirstAvatar={index % 2 === 0}
                    {...TeamMembersProps}
                />
            ))}
        </div>
    );
};
export default TeamSection;
