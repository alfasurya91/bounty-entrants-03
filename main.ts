import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

try {
  const srcDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
  const dstDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  if (!existsSync(dstDir)) mkdirSync(dstDir, { recursive: true });
  const data = readFileSync(join(srcDir, 'BOUNTY.json'));
  const json = JSON.parse(data.toString());
  const count = json.bounties?.length ?? 0;
  writeFileSync(join(dstDir, 'BOUNTY.json'), data);
  console.log(`copied BOUNTY.json with ${count} bounties`);
} catch (e) {
  console.error(e instanceof Error ? e.message : String(e));
  process.exit(1);
}