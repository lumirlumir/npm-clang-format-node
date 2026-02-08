import { writeFileSync } from 'node:fs';
import json from './.github/sync-client.json' with { type: 'json' };

const syncs = json.syncs.filter(item => typeof item !== 'string');

const results = await Promise.allSettled(
  syncs.map(({ source, dest }) =>
    fetch(
      `https://raw.githubusercontent.com/${json.org}/${json.repo}/${json.branch}/${dest}`,
    ).then(async res => {
      if (!res.ok) {
        throw new Error(`

Failed to fetch:
- source: ${source}
- dest: ${dest}
- status: ${res.status} ${res.statusText}
`);
      }

      return {
        source,
        text: await res.text(),
      };
    }),
  ),
);

const rejectedResults = results.filter(result => result.status === 'rejected');
const fulfilledResults = results.filter(result => result.status === 'fulfilled');

if (rejectedResults.length > 0) {
  throw new AggregateError(
    rejectedResults.map(rejectedResult => rejectedResult.reason),
    'One or more synchronizations failed.',
  );
}

for (const {
  value: { source, text },
} of fulfilledResults) {
  writeFileSync(source, text, 'utf-8');
}
