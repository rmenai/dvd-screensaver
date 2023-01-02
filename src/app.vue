<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const config = useRuntimeConfig();
const route = useRoute();
const { t } = useI18n();

const pageLayout = `layout.${route.meta.layout ?? "default"}.titleTemplate`;
const pageTitle = `page.${route.meta.title ?? "unnamed"}.title`;

// Dynamically change the page title based on the locale.
const title = computed(() => t(pageLayout, { title: t(pageTitle) }));
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="$t('meta.head.description')" />

      <template v-if="config.public.siteUrl">
        <Link v-for="link in head.link" :key="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        <Meta v-for="meta in head.meta" :key="meta.id" :property="meta.property" :content="meta.content" />
      </template>

      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00f183" />
      <Meta name="msapplication-TileColor" content="#00f183" />
      <Meta name="theme-color" content="#ffffff" />
    </Head>
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
