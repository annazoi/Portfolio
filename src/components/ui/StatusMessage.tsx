import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

interface StatusMessageProps {
	type: 'success' | 'error';
	message: string;
}

const iconMap = {
	success: <CheckCircleIcon className="h-6 w-6 text-green-400 flex-shrink-0" aria-hidden="true" />,
	error: <ExclamationTriangleIcon className="h-6 w-6 text-red-400 flex-shrink-0" aria-hidden="true" />,
};

export default function StatusMessage({ type, message }: StatusMessageProps) {
	const [visible, setVisible] = useState(true);

	// Auto‑dismiss after 3 seconds
	useEffect(() => {
		const timer = setTimeout(() => setVisible(false), 3001);
		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					role="alert"
					aria-live="assertive"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
					className="flex items-center gap-2 p-4 rounded-xl bg-muted border border-border backdrop-blur-sm"
				>
					{iconMap[type]}
					<p className={`text-sm font-medium ${type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
						{' '}
						{message}{' '}
					</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
