import React from 'react';
import { FiCode, FiUsers, FiMessageCircle, FiDollarSign } from 'react-icons/fi';
import Section from '../ui/Section';

const IntegrationExamples: React.FC = () => {
  const codeExamples = [
    {
      icon: FiUsers,
      title: 'Multi-Role Authentication',
      description:
        'Secure authentication system for clients, craftsmen, and admins',
      code: `// Authentication across platforms
const loginUser = async (credentials) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: credentials.identifier, // email|phone
      password: credentials.password,
      type: credentials.type // public|internal
    })
  });
  
  return response.json();
};`,
      response: 'JWT tokens, role-based permissions, secure session management',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: FiUsers,
      title: 'Job Management System',
      description: 'Complete job lifecycle from creation to completion',
      code: `// Job creation with file uploads
const createJob = async (jobData, images) => {
  const formData = new FormData();
  formData.append('title', jobData.title);
  formData.append('description', jobData.description);
  formData.append('serviceId', jobData.serviceId);
  
  images.forEach(image => {
    formData.append('images', image);
  });
  
  return fetch('/api/jobs', {
    method: 'POST',
    headers: { 'Authorization': \`Bearer \${token}\` },
    body: formData
  });
};`,
      response: 'File uploads, job tracking, status management, notifications',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiMessageCircle,
      title: 'Real-time Communication',
      description: 'Socket.IO powered messaging between clients and craftsmen',
      code: `// Real-time chat system
const initializeChat = (token) => {
  const socket = io('/api', {
    auth: { token }
  });
  
  // Auto-join user's chats
  socket.on('connect', () => {
    socket.emit('join-user-chats');
  });
  
  // Handle new messages
  socket.on('new-message', (message) => {
    updateChatUI(message);
    playNotificationSound();
  });
  
  return socket;
};`,
      response:
        'Real-time messaging, typing indicators, file sharing, read receipts',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiDollarSign,
      title: 'Payment & Wallet System',
      description: 'Comprehensive payment processing with dynamic fees',
      code: `// Dynamic fee calculation
const processPayment = async (jobId, amount) => {
  // System automatically calculates fees based on 
  // craftsman's completed jobs count
  const payment = await fetch('/api/payments/process', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jobId,
      amount,
      paymentMethod: 'wallet'
    })
  });
  
  return payment.json();
};`,
      response:
        'Progressive fee structure, secure transactions, wallet management',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <Section
      id="system-examples"
      title="System Implementation Examples"
      subtitle="Code examples showcasing how our backend powers the complete Herfa ecosystem"
      className="py-16 px-6 bg-white"
      titleIcon={<FiCode className="w-8 h-8 text-green-600" />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {codeExamples.map((example, index) => {
          const Icon = example.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${example.gradient} rounded-lg flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {example.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{example.description}</p>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                <pre className="text-sm text-green-400 font-mono">
                  <code>{example.code}</code>
                </pre>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Features:</strong> {example.response}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default IntegrationExamples;
