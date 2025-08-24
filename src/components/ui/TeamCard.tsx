import React from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiExternalLink,
  FiMapPin,
} from 'react-icons/fi';
import type { TeamMember } from '../../types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  // Color themes for different cards
  const colorThemes = [
    {
      primary: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50',
      text: 'text-blue-600',
      hover: 'hover:text-blue-700',
    },
    {
      primary: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'from-emerald-50 to-teal-50',
      text: 'text-emerald-600',
      hover: 'hover:text-emerald-700',
    },
    {
      primary: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      bg: 'from-purple-50 to-pink-50',
      text: 'text-purple-600',
      hover: 'hover:text-purple-700',
    },
    {
      primary: 'orange',
      gradient: 'from-orange-500 to-red-500',
      bg: 'from-orange-50 to-red-50',
      text: 'text-orange-600',
      hover: 'hover:text-orange-700',
    },
    {
      primary: 'indigo',
      gradient: 'from-indigo-500 to-blue-500',
      bg: 'from-indigo-50 to-blue-50',
      text: 'text-indigo-600',
      hover: 'hover:text-indigo-700',
    },
  ];

  const theme = colorThemes[index % colorThemes.length];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return FiGithub;
      case 'linkedin':
        return FiLinkedin;
      case 'twitter':
        return FiTwitter;
      case 'email':
        return FiMail;
      case 'website':
        return FiExternalLink;
      default:
        return FiExternalLink;
    }
  };

  const hasLinks =
    member.links && Object.values(member.links).some((link) => link);

  return (
    <div className="group relative">
      {/* Main Card */}
      <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${theme.bg} rounded-3xl`}
          ></div>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-12 -translate-x-12"></div>
        </div>

        <div className="relative z-10">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              {/* Avatar with gradient border */}
              <div
                className={`p-1 rounded-full bg-gradient-to-br ${theme.gradient} shadow-lg mb-4`}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={`${member.name}'s avatar`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-2xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Name and Role */}
            <h3
              className={`text-xl font-bold text-gray-900 mb-2 group-hover:${theme.text} transition-colors duration-300`}
            >
              {member.name}
            </h3>

            <div
              className={`inline-flex items-center px-3 py-1 rounded-full bg-gray-100 group-hover:bg-gradient-to-r group-hover:${theme.bg} transition-all duration-300`}
            >
              <span
                className={`text-sm font-medium text-gray-600 group-hover:${theme.text} transition-colors duration-300`}
              >
                {member.role}
              </span>
            </div>
          </div>

          {/* Bio */}
          {member.bio && (
            <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
              {member.bio}
            </p>
          )}

          {/* Location */}
          {member.location && (
            <div className="flex items-center justify-center mb-4 text-gray-500">
              <FiMapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{member.location}</span>
            </div>
          )}

          {/* Social Links */}
          {hasLinks && (
            <div className="flex justify-center space-x-3 pt-4 border-t border-gray-100 group-hover:border-transparent transition-colors duration-300">
              {Object.entries(member.links || {}).map(([platform, url]) => {
                if (!url) return null;
                const Icon = getSocialIcon(platform);
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:${theme.gradient} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group/link`}
                    title={`${member.name}'s ${platform}`}
                  >
                    <Icon className="w-4 h-4 text-gray-600 group-hover/link:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Hover Effect Border */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
        ></div>
      </div>
    </div>
  );
};

export default TeamCard;
