# Generated by Django 4.2.15 on 2024-09-29 04:24

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="stores",
            fields=[
                ("store_id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=100)),
                ("location", django.contrib.gis.db.models.fields.PointField(srid=4326)),
                ("description", models.CharField(max_length=1000)),
            ],
        ),
    ]
