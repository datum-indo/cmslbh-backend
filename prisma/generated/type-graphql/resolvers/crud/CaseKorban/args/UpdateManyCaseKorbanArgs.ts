import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseKorbanUpdateManyMutationInput } from "../../../inputs/CaseKorbanUpdateManyMutationInput";
import { CaseKorbanWhereInput } from "../../../inputs/CaseKorbanWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseKorbanArgs {
  @TypeGraphQL.Field(_type => CaseKorbanUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseKorbanUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseKorbanWhereInput, {
    nullable: true
  })
  where?: CaseKorbanWhereInput | undefined;
}
