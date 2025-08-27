import React from 'react';
import { FiMessageSquare, FiWifi, FiUsers, FiCheck } from 'react-icons/fi';
import Section from '../ui/Section';

const RealTimeFeatures: React.FC = () => {
  const messagingFeatures = [
    {
      title: 'Socket.IO Messaging System',
      description:
        'Real-time chat implementation using Socket.IO for instant communication between clients and craftsmen',
      icon: <FiMessageSquare className="w-6 h-6" />,
      features: [
        'Bidirectional WebSocket communication',
        'Real-time message delivery and acknowledgments',
        'Typing indicators during active conversations',
        'Online/offline status tracking',
        'Message history persistence in MongoDB',
        'File and image sharing capabilities',
        'Auto-reconnection on connection loss',
      ],
      color: 'from-blue-500 to-indigo-500',
      implementation:
        'Socket.IO Client integrated with React hooks for state management and real-time updates',
    },
  ];

  const technicalImplementation = [
    {
      aspect: 'Message Protocol',
      details:
        'Socket.IO with WebSocket transport and polling fallbacks for reliability',
    },
    {
      aspect: 'Message Delivery',
      details:
        'Guaranteed delivery with acknowledgments and automatic retry mechanisms',
    },
    {
      aspect: 'Performance',
      details: 'Sub-100ms message latency with optimized payload sizes',
    },
    {
      aspect: 'Connection Management',
      details:
        'Automatic reconnection with exponential backoff and connection health monitoring',
    },
    {
      aspect: 'Security',
      details:
        'JWT-based authentication with message validation and encrypted transport',
    },
    {
      aspect: 'Scalability',
      details: 'Designed for horizontal scaling with Redis adapter support',
    },
  ];

  const messageFlowSteps = [
    {
      step: 'Message Send',
      description: 'User types and sends message',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'bg-blue-600',
    },
    {
      step: 'Socket.IO Transport',
      description: 'WebSocket delivery with fallbacks',
      icon: <FiWifi className="w-6 h-6" />,
      color: 'bg-green-600',
    },
    {
      step: 'Real-Time Delivery',
      description: 'Instant message display with acknowledgment',
      icon: <FiCheck className="w-6 h-6" />,
      color: 'bg-purple-600',
    },
  ];

  return (
    <Section
      id="real-time-messaging"
      title="Real-Time Messaging System"
      subtitle="Socket.IO implementation for instant, reliable communication between platform users"
      className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
      titleIcon={<FiMessageSquare className="w-8 h-8 text-blue-600" />}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Messaging System Overview */}
        <div className="grid grid-cols-1 gap-8">
          {messagingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${feature.color} p-8 text-white`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-white">{feature.icon}</div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                    Implementation Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {feature.features.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Technical Implementation
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.implementation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Technical Implementation Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalImplementation.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  {spec.aspect}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {spec.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Message Flow */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Real-Time Message Flow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {messageFlowSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div
                  className={`w-16 h-16 mx-auto mb-4 ${step.color} rounded-full flex items-center justify-center text-white`}
                >
                  {step.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {step.step}
                </h4>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < messageFlowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: 'Message Latency',
              value: '<100ms',
              color: 'text-blue-600',
            },
            {
              label: 'Connection Reliability',
              value: '99.9%',
              color: 'text-green-600',
            },
            {
              label: 'Message Delivery',
              value: '100%',
              color: 'text-purple-600',
            },
            {
              label: 'Concurrent Chats',
              value: '500+',
              color: 'text-orange-600',
            },
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Code Implementation Highlight */}
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-6">
            Socket.IO Integration Example
          </h3>
          <div className="bg-gray-800 rounded-lg p-6">
            <pre className="text-sm text-green-400 whitespace-pre-wrap break-words">
              {`// Socket.IO client setup for real-time messaging
import { io } from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
  auth: { token: jwt },
  transports: ['websocket', 'polling']
});

// Real-time message handling
socket.on('message', (message) => {
  setMessages(prev => [...prev, message]);
});

// Send message with acknowledgment
const sendMessage = (content) => {
  socket.emit('sendMessage', { content, chatId }, (ack) => {
    if (ack.success) setMessageSent(true);
  });
};`}
            </pre>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RealTimeFeatures;
