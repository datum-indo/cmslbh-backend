import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictCreateOrConnectWithoutDataDictLocalInput } from "../inputs/DataDictCreateOrConnectWithoutDataDictLocalInput";
import { DataDictCreateWithoutDataDictLocalInput } from "../inputs/DataDictCreateWithoutDataDictLocalInput";
import { DataDictUpdateWithoutDataDictLocalInput } from "../inputs/DataDictUpdateWithoutDataDictLocalInput";
import { DataDictUpsertWithoutDataDictLocalInput } from "../inputs/DataDictUpsertWithoutDataDictLocalInput";
import { DataDictWhereUniqueInput } from "../inputs/DataDictWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictUpdateOneWithoutDataDictLocalInput {
  @TypeGraphQL.Field(_type => DataDictCreateWithoutDataDictLocalInput, {
    nullable: true
  })
  create?: DataDictCreateWithoutDataDictLocalInput | undefined;

  @TypeGraphQL.Field(_type => DataDictCreateOrConnectWithoutDataDictLocalInput, {
    nullable: true
  })
  connectOrCreate?: DataDictCreateOrConnectWithoutDataDictLocalInput | undefined;

  @TypeGraphQL.Field(_type => DataDictUpsertWithoutDataDictLocalInput, {
    nullable: true
  })
  upsert?: DataDictUpsertWithoutDataDictLocalInput | undefined;

  @TypeGraphQL.Field(_type => DataDictWhereUniqueInput, {
    nullable: true
  })
  connect?: DataDictWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => DataDictUpdateWithoutDataDictLocalInput, {
    nullable: true
  })
  update?: DataDictUpdateWithoutDataDictLocalInput | undefined;
}
