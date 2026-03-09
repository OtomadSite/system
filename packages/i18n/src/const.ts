/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export const languages = [
	'en-US',
	'ja-JP',
	'ja-x-kansai',
	'ja-x-paimon',
] as const;

export const primaries = {
	'en': 'US',
	'ja': 'JP',
	'zh': 'CN',
} as const satisfies Record<string, string>;
