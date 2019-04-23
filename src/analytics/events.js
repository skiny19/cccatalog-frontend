import { Event } from './GoogleAnalytics';

export function CopyAttribution(text) {
  return new Event('Attribution', 'Copy', text);
}

export function EmbedAttribution() {
  return new Event('Attribution', 'Embed HTML');
}

export function DownloadWatermark(params) {
  let label = 'Download watermark';

  if (params.shouldWatermark) {
    label = `${label} | In Attribution Frame`;
  }
  if (params.shouldEmbedMetadata) {
    label = `${label} | With Attribution Metadata`;
  }

  return new Event('Download', label, params.imageId);
}
